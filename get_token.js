export default async function handler(req, res) {
    const ApiID = "0773581337";
    const password = "130890";

    try {
        const response = await fetch(`https://www.call2all.co.il/ym/api/Login?username=${ApiID}&password=${password}`);
        const data = await response.json();

        if (data.responseStatus === "OK") {
            res.status(200).json({ token: data.token });
        } else {
            res.status(400).json({ error: data.message });
        }
    } catch (error) {
        res.status(500).json({ error: "שגיאה בשרת" });
    }
}
