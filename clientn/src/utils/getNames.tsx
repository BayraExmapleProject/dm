const getNames = async (id: number) => {
  const res = await fetch("http://127.0.0.1:8000/items/" + id, {
    cache: "no-cache",
  });
  return res.json();
};

export default getNames;
