// The session from a server the user has joined
export interface ServerSessionType {
  nickname: string
  token: string
  public_key: string
}

// The session from our Gryt Authentication Server (GAS)
export interface GrytSessionType {
  username: string
  email: string
  token: string
  public_key: string
}
