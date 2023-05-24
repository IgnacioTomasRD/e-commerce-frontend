export const fetchPosts = async () => {
  try {
    const req = await fetch("http://localhost:3000/post", { method: "GET" });
    const data = await req.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = async (id) => {
  try {
    const req = await fetch("http://localhost:3000/post/" + id, {
      method: "GET",
    });
    const data = await req.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const res = await fetch("http://localhost:3000/logout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
