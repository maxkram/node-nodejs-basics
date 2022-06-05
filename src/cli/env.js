export const parseEnv = () => {
  const arr = [];
  for (let n in process.env)
    if (n.startsWith('RSS_')) arr.push(`${n}=${process.env[n]}`);
  console.log(arr.join('; '));
};
parseEnv();
