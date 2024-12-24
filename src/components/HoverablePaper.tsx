import { Paper } from "@mui/material";
import React from "react";

export default function HoverablePaper({className, children}:{className?: string, children: React.ReactNode}) {
  return (
    <div className={className}>
      <Paper 
        sx={{
          transition: 'box-shadow 0.3s',
          boxShadow:6,
          '&:hover':{
            boxShadow:24
          }
        }}
      >
        {children}
        </Paper>
    </div>
  )
}
