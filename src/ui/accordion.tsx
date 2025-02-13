import * as React from "react"
import clsx from "clsx"
import { Accordion } from "radix-ui"

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Accordion.Item>,
  React.ComponentPropsWithoutRef<typeof Accordion.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item className={clsx("", className)} {...props} ref={forwardedRef}>
    {children}
  </Accordion.Item>
))

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={clsx(
        "group flex flex-1 items-center justify-between p-0 pb-4 outline-none bg-transparent border-0 [border-bottom:1px_solid_hsla(0,0%,100%,0.15)] uppercase",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
        aria-hidden
      >
        <path
          d="M13.28 6.71667L8.9333 11.0633C8.41997 11.5767 7.57997 11.5767 7.06664 11.0633L2.71997 6.71667"
          stroke="white"
          strokeOpacity="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Accordion.Trigger>
  </Accordion.Header>
))

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={clsx(
      "overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="">{children}</div>
  </Accordion.Content>
))

export const AccordionRoot = Accordion.Root
