import { Navigate } from "solid-start"
import { Page } from "~/features/routing"

export default function NotFound() {
  return <Navigate href={Page.Home} />
}
