

const baseUrl = process.env.APIBASEURL;


export async function postApiData(url, data) {
  if (typeof window !== "undefined") {
    const apiUrl = `${baseUrl}/${url}`;

    try {
      const result = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer '1000.4cd565fb3a43347848582aef38c02386.689c3ac9756b6c67a33b45cf5b0a0b6d'}`,
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        const responseData = await result.json();
        return responseData;
      } else {
        const error = await result.json();
        return error;
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}



// post with token api call
export async function postWithToken(url, data) {
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  const apiUrl = `${baseUrl}/${url}`;
 

  try {
    const result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function getApiData(url) {
  const apiUrl = `${baseUrl}/${url}`;
  // console.log(apiUrl);
  if (typeof window !== "undefined") {


  }

 
  try {
    const result = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(result);
    if (result) {
      const data = await result.json();

      return data;
    } else {
      const errorData = await result.json();
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function getWithToken(url) {
  const apiUrl = `${baseUrl}/${url}`;
  if (typeof window !== "undefined") {


  }

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  try {
    const result = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const errorData = await result.json();
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function postApiFormDataToken(url, data) {

  if (typeof window !== "undefined") {


  }
  const apiUrl = `${baseUrl}/${url}`;
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  try {
    const result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (result) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function postApiFormData(url, data) {

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  const apiUrl = `${baseUrl}/${url}`;

  try {
    const result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}


export async function postApiJson(url, data) {
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  const apiUrl = `${baseUrl}/${url}`;

  try {
    const result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (result.ok) {
      const responseData = await result.json();
      return responseData;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return { success: false, message: "An error occurred. Please try again later." };
  }
}

export async function deleteApiData(url) {
  if (typeof window === "undefined") {
    // Handle server-side (Node.js) logic if needed
  }

  const apiUrl = `${baseUrl}/${url}`;

  try {
    const result = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
  
  }
}


export async function updateApiData(url, data) {
  if (typeof window === "undefined") {
    // Handle server-side (Node.js) logic if needed
  }

  const apiUrl = `${baseUrl}/${url}`;
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  try {
    const result = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data), 
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

export async function updateApiFormData(url, data) {

  if (typeof window !== "undefined") {


  }
  const apiUrl = `${baseUrl}/${url}`;

  try {
    const result = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
      },
      body: data,
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}