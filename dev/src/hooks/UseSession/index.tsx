import React, { useEffect, useState } from 'react'
import { GrytSessionType, ServerSessionType } from './type'

export default function useSession() {
  const [grytSession, setGrytSession] = useState<GrytSessionType | undefined | null>(undefined);
  const [serverSessions, setServerSessions] = useState<ServerSessionType[] | undefined | null>(undefined);

  useEffect(() => {
    // check cookie or local storage here to see if we find any session token

    setGrytSession(null);
    setServerSessions(null);
  }, [])

  return { grytSession, serverSessions }
}
