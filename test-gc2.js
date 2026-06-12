const start = '2020-01-01T00:00:00.000Z';
const end = new Date().toISOString();
const headers = {
  "Authorization": `Bearer ${process.env.GOATCOUNTER_API_KEY}`,
  "Content-Type": "application/json"
};
// Test if we can filter by path
fetch(`https://thatalexguy.goatcounter.com/api/v0/stats/hits?start=${start}&end=${end}&limit=100&filter=/posts/building-with-intent`, { headers })
  .then(res => res.json())
  .then(data => console.log("FILTER", data.hits?.length, data.hits?.[0]?.path))
  .catch(console.error);

fetch(`https://thatalexguy.goatcounter.com/api/v0/stats/hits?start=${start}&end=${end}&limit=100&path=/posts/building-with-intent/`, { headers })
  .then(res => res.json())
  .then(data => console.log("PATH", data.hits?.length, data.hits?.[0]?.path))
  .catch(console.error);
