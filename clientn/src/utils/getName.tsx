const getName = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/items`, {
    cache: "no-store",
  });
  return res.json();
};

export default getName;
