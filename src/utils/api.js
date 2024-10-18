const api = (() => {
  const BASE_URL = "https://public-api.delcom.org/api/v1";

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  // API Auth => https://public-api.delcom.org/docs/1.0/api-auth
  async function postAuthRegister({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    return message;
  }

  async function postAuthLogin({ email, password }) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    const {
      data: { token },
    } = responseJson;
    return token;
  }

  // API Users => https://public-api.delcom.org/docs/1.0/apiusers
  async function getMe() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    const {
      data: { user },
    } = responseJson;
    return user;
  }

  async function postChangePhotoProfile({ photoFile }) {
    const formData = new FormData();
    formData.append("photo", photoFile);
    const response = await _fetchWithAuth(`${BASE_URL}/users/photo`, {
      method: "POST",
      body: formData,
    });
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    return message;
  }

  // API LostFounds => https://public-api.delcom.org/docs/1.0/apilostfounds
  async function postAddLostFound({ title, description ,status}) {
    const response = await _fetchWithAuth(`${BASE_URL}/lost-founds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        status,
      }),
    });
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    const {
      data: { lostfound_id },
    } = responseJson;
    return lostfound_id;
  }

  async function postChangeCoverLostFound({ id, cover }) {
    const formData = new FormData();
    formData.append("cover", cover);
    const response = await _fetchWithAuth(
      `${BASE_URL}/lost-founds/${id}/cover`,
      {
        method: "POST",
        body: formData,
      }
    );
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    return message;
  }

  async function putUpdateLostFound({ id, title, description, is_finished }) {
    console.log("Updating lostfound:", { id, title, description, is_finished });

    const response = await _fetchWithAuth(`${BASE_URL}/lost-founds/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        is_finished,
      }),
    });

    const responseJson = await response.json();
    console.log("API response:", responseJson); // Log the entire API response

    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message); // Handle error message if success is false
    }

    return message;
  }

  async function deleteLostFound(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/lost-founds/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    return message;
  }

  async function getAllLostFounds(is_finished) {
    const response = await _fetchWithAuth(
      `${BASE_URL}/lost-founds?is_finished=${is_finished}`
    );
    const responseJson = await response.json();

    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    const {
      data: { lostfounds },
    } = responseJson;
    return lostfounds;
  }

  async function getDetailLostFound(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/lost-founds/${id}`);
    const responseJson = await response.json();
    const { success, message } = responseJson;
    if (success !== true) {
      throw new Error(message);
    }
    const {
      data: { lostfound },
    } = responseJson;
    return lostfound;
  }

  return {
    putAccessToken,
    getAccessToken,
    postAuthRegister,
    postAuthLogin,
    getMe,
    postChangePhotoProfile,
    postAddLostFound,
    postChangeCoverLostFound,
    putUpdateLostFound,
    deleteLostFound,
    getAllLostFounds,
    getDetailLostFound,
  };
})();

export default api;
