//Mock the network call to get the data after few seconds and returns the same data passed to the function 

export const mockGetCall = (data) => {
    const httpcall = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data) resolve({ data: data });
            else reject("Error: No data received");  // reject if no data is passed
        }, 2000);

    }) 

    return httpcall;  // return the promise from the function
}