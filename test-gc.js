const start = '2020-01-01T00:00:00.000Z';
const end = new Date().toISOString();
const headers = {
  "Authorization": `Bearer ${process.env.GOATCOUNTER_API_KEY}`,
  "Content-Type": "application/json"
};
const path = "/posts/building-with-intent/";
fetch(`https://thatalexguy.goatcounter.com/api/v0/stats/hits?start=${start}&end=${end}&limit=100`, { headers })
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(console.error);
