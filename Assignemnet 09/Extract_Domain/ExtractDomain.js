// n) Extract the domain name from a URL string.

function extractDomain(url) {
    const protocolIndex = url.indexOf('://');
    if (protocolIndex !== -1) {
        url = url.slice(protocolIndex + 3);
    }
    const domainEndIndex = url.indexOf('/');
    if (domainEndIndex !== -1) {
        url = url.slice(0, domainEndIndex);
    }
    return url.split(':')[0];
}

// Example usage:
console.log(extractDomain("https://www.example.com/path/to/page")); // Output: "www.example.com"
console.log(extractDomain("http://example.com:8080"));             // Output: "example.com"
console.log(extractDomain("ftp://subdomain.example.org"));         // Output: "subdomain.example.org"
