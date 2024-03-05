import axios from "axios"
const asdjbdevAPI = axios.create({
  baseURL: "https://asdjb-dev-134217.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return asdjbdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function efergtryn_get_search_tests_read(payload) {
  return asdjbdevAPI.get(`/api/v1/connectors/efergtryn/search/tests/`)
}
function api_v1_login_create(payload) {
  return asdjbdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return asdjbdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return asdjbdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return asdjbdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return asdjbdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return asdjbdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  efergtryn_get_search_tests_read,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
