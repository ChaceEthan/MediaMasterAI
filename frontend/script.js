// ⚠️ Use backend to hide API key later
const API_KEY = "YOUR_SAFE_API_KEY";

document.getElementById("generateImage").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value;
    const lang = document.getElementById("language").value;

    const response = await fetch("https://api.openai.com/v1/images", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: `${prompt} (${lang})`,
            n: 1,
            size: "1024x1024"
        })
    });

    const data = await response.json();
    document.getElementById("result").innerHTML = `<img src="${data.data[0].url}" alt="Generated Image">`;
});
