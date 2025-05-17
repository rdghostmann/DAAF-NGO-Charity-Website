import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-8", className)} {...props} />,
)
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("relative pl-8", className)} {...props} />,
)
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute left-2.5 top-5 h-full w-px -translate-x-1/2 bg-border", className)}
      {...props}
    />
  ),
)
TimelineConnector.displayName = "TimelineConnector"

const TimelineIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute left-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary", className)}
      {...props}
    />
  ),
)
TimelineIcon.displayName = "TimelineIcon"

const TimelineHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center gap-2", className)} {...props} />,
)
TimelineHeader.displayName = "TimelineHeader"

const TimelineBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("pt-2", className)} {...props} />,
)
TimelineBody.displayName = "TimelineBody"

export { Timeline, TimelineItem, TimelineConnector, TimelineIcon, TimelineHeader, TimelineBody }
