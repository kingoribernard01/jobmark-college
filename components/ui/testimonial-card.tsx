
"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "../../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 transition-all hover:shadow-md md:p-6",
          className
        )}
        {...props}
      >
        <div className="absolute right-4 top-4 text-4xl font-serif text-slate-100 pointer-events-none select-none">
          "
        </div>

        <div className="flex flex-col gap-3 justify-between h-full">
          {rating > 0 && (
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={12}
                  className={cn(
                    index < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-slate-100 text-slate-100"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-sm text-slate-600 italic leading-relaxed">
            {testimonial}
          </p>

          <div className="flex items-center gap-3 justify-start mt-2">
            <div className="flex items-center gap-3">
              {image && (
                <Avatar className="h-10 w-10 border-2 border-white shadow-sm shrink-0">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col min-w-0">
                <h3 className="font-bold text-slate-900 text-sm truncate leading-tight">{name}</h3>
                <p className="text-[11px] text-slate-400 font-medium truncate uppercase tracking-wider">
                  {role}
                  {company && ` • ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }
