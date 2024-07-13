"use client"
import { PropsWithChildren, useEffect, useState } from "react";

export function ClientOnly({ children }: PropsWithChildren){
    const [clientReady, setClientReady] = useState<boolean>(false);
  
    useEffect(() => {
      setClientReady(true);
    }, []);
  
    return clientReady ? <>{children}</> : null;
  };