"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@ui/lib";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = ({
	className,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants>) => (
	<LabelPrimitive.Root
		className={cn(labelVariants(), className)}
		{...props}
	/>
);

export { Label };
