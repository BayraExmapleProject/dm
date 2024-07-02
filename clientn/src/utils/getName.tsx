const getName = async () => {
  const res = await fetch("http://127.0.0.1:8000/items", {
    cache: "no-store",
  });
  return res.json();
};

export default getName;
