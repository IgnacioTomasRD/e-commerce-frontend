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
    const user = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: {
        email,
        password,
      },
    });
    console.log("🚀 ~ file: index.js:38 ~ login ~ user:", user);
  } catch (error) {
    console.log(error);
  }
};
