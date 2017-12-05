require("isomorphic-fetch");

// Create a new object, that prototypically inherits from the Error constructor
class FetchError implements Error {
  public name = "FetchError";
  public stack = new Error().stack;
  constructor(public message: string, private code: number, private responseBody: any) {
  }
}

export default function enhancedFetch(url: string, options: any) {
  options.headers = options.headers || {};

  return new Promise((resolve, reject) => {
    Object.assign(
      options.headers, {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    );
    options.credentials = "same-origin";
    if (typeof options.body !== "string") {
      options.body = JSON.stringify(options.body);
    }
    fetch(url, options)
      .then(response => {
        const contentType = response.headers.get("Content-Type");
        if (response.status >= 400) {
          throw new FetchError(response.statusText, response.status, response.text());
        }
        if (contentType) {
          if (contentType.indexOf("application/json") > -1) {
            resolve(response.json());
          }
          if (contentType.indexOf("image") > -1) {
            resolve(response.blob());
          }
        } else {
          resolve(response);
        }
      })
      .catch(async err => {
        console.error(err);
        if (err.responseBody) {
          const responseBody = await err.responseBody;
          reject(responseBody);
        } else {
          reject(err);
        }
      });
  });
}
