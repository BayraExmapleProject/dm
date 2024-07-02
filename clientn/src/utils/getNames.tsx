const getNames = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/items` + id, {
    cache: "no-cache",
  });
  return res.json();
};

export default getNames;
