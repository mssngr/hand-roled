/** String literals of the standard HTTP request methods */
type HttpRequestMethod =
  | 'CONNECT'
  | 'DELETE'
  | 'GET'
  | 'HEAD'
  | 'OPTIONS'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'TRACE'

/**
 * A resource is anything in your app or system that requires access control.
 * It can be a database entity, UI component, API endpoint, or anything else that needs to be protected.
 *
 * @param key A unique identifier for the resource.
 * @param label A human-readable name for the resource.
 * @param children An array of child resources that are nested under this resource (ie: a database table and its columns.)
 * @param parent The parent resource that this resource is nested under.
 */
type Resource = {
  key: string
  label: string
  children?: Resource[]
  parent?: Resource
}

/**
 * A permission is authorization for a particular action that can be taken on a resource.
 * Examples are "Read", "Write", "Delete", etc.
 *
 * @param key A unique identifier for the permission.
 * @param label A human-readable name for the permission.
 * @param resource The resource that this permission refers to.
 * @param uis An array of UIs that display this resource.
 * @param uis[].paths URL paths that should be restricted to those with permissions for this resource (glob patterns allowed.)
 * @param uis[].classNames CSS classnames for elements that should be restricted to those with permissions for this resource (glob patterns allowed.)
 * @param apis An array of APIs that access this resource.
 * @param apis[].paths[].path URL paths that should be restricted to those with permissions for this resource (glob patterns allowed.)
 * @param apis[].paths[].methods HTTP methods that should be restricted to those with permissions for this resource.
 */
type Permission = {
  key: string
  label: string
  resource: Resource
  uis: Array<{
    baseURL: string
    paths: string[]
    classNames: string[]
  }>
  apis: Array<{
    baseURL: string
    paths: Array<{
      path: string
      methods: HttpRequestMethod[]
    }>
  }>
}
