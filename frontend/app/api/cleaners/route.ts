const { name, phone, plowType, hasPlow } = await req.json();

await db.cleaner.create({
  data: {
    name,
    phone,
    plowType,
    hasPlow
  }
});
