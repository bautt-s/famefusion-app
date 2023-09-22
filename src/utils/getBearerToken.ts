export const getBearerToken = async () => {
    const params = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID || "",
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_ISSUER_URL}/oauth2/token`, {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
        body: params as unknown as URLSearchParams, // type assertion to URLSearchParams
    })

    console.log(res.json())
    return res
}