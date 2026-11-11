// x093 6 : derive a sibling subdomain from the current site's own hostname, e.g.
// web-dev.please-payment.com -> merchant-dev.please-payment.com / admin-dev.please-payment.com
// please-payment.com         -> merchant.please-payment.com / admin.please-payment.com
export function deriveSiblingDomain(hostname: string, targetPrefix: string): string {
  if (hostname.startsWith('web-')) {
    return `${targetPrefix}-${hostname.slice('web-'.length)}`
  }
  if (hostname.startsWith('web.')) {
    return `${targetPrefix}.${hostname.slice('web.'.length)}`
  }
  return `${targetPrefix}.${hostname}`
}
