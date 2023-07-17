import axios from 'axios';

export const fetchPosts = async (page) => {
  try {
    const req = await fetch("http://localhost:3000/post?page=" + page , { method: "GET" });
    const data = await req.json();
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

export const fetchCategories = async () => {
  try {
    const res = await fetch("http://localhost:3000/category", {
      method: "GET",
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
}

export const uploadNewProduct = async (product) => {
  console.log("🚀 ~ file: index.js:78 ~ uploadNewProduct ~ product:", product)
  try {
    const response = await axios.post('http://localhost:3000/product', product, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};