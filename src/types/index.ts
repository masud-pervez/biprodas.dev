export type CurrentUser = {
  id: string
  name: string
  username: string
  email: string
  shortBio: string
  image: string
}

export interface payload {
  name: string
  email: string
  shortBio?: string
  image?: string
}
