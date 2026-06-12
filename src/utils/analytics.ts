let hitsPromise: Promise<any> | null = null;

export async function getGoatCounterHits() {
	if (!hitsPromise) {
		const startISO = new Date('2020-01-01').toISOString();
		const endISO = new Date().toISOString();
		const headers = {
			"Authorization": `Bearer ${import.meta.env.GOATCOUNTER_API_KEY}`,
			"Content-Type": "application/json"
		};
		hitsPromise = fetch(`https://thatalexguy.goatcounter.com/api/v0/stats/hits?start=${encodeURIComponent(startISO)}&end=${encodeURIComponent(endISO)}&limit=1000`, { headers })
			.then(res => res.json())
			.catch(err => {
				console.error("Failed to fetch Goatcounter analytics:", err);
				return null;
			});
	}
	return hitsPromise;
}
