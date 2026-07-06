/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        "colors": {
            "on-primary-container": "#005434",
            "on-surface-variant": "#bbcabe",
            "on-secondary-fixed-variant": "#474746",
            "tertiary-fixed-dim": "#c8c6c6",
            "on-primary-fixed": "#002112",
            "secondary": "#c8c6c5",
            "on-secondary": "#313030",
            "on-tertiary-fixed": "#1b1c1c",
            "on-secondary-fixed": "#1c1b1b",
            "surface-tint": "#51df9c",
            "on-tertiary-container": "#484848",
            "error-container": "#93000a",
            "on-primary-fixed-variant": "#005233",
            "outline": "#869489",
            "on-background": "#e5e2e1",
            "outline-variant": "#3d4a41",
            "error": "#ffb4ab",
            "primary-container": "#3ecf8e",
            "tertiary": "#d5d3d2",
            "secondary-fixed-dim": "#c8c6c5",
            "primary": "#60eca8",
            "inverse-primary": "#006c45",
            "surface-container-low": "#1c1b1b",
            "on-tertiary": "#303030",
            "primary-fixed-dim": "#51df9c",
            "surface-container-lowest": "#0e0e0e",
            "surface-container-highest": "#353534",
            "on-error-container": "#ffdad6",
            "on-tertiary-fixed-variant": "#474747",
            "tertiary-container": "#b9b7b7",
            "secondary-container": "#474746",
            "surface-variant": "#353534",
            "surface-dim": "#131313",
            "inverse-surface": "#e5e2e1",
            "inverse-on-surface": "#313030",
            "tertiary-fixed": "#e4e2e1",
            "background": "#131313",
            "on-error": "#690005",
            "primary-fixed": "#71fcb6",
            "surface": "#131313",
            "surface-container-high": "#2a2a2a",
            "on-surface": "#e5e2e1",
            "secondary-fixed": "#e5e2e1",
            "on-primary": "#003822",
            "surface-bright": "#3a3939",
            "on-secondary-container": "#b7b5b4",
            "surface-container": "#201f1f"
        },
        "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
        },
        "spacing": {
            "unit": "4px",
            "container-padding": "24px",
            "gutter": "16px",
            "stack-lg": "32px",
            "stack-md": "16px",
            "stack-sm": "8px"
        },
        "fontFamily": {
            "display-lg": ["DM Sans"],
            "headline-md": ["DM Sans"],
            "body-sm": ["JetBrains Mono"],
            "title-sm": ["DM Sans"],
            "code-lg": ["JetBrains Mono"],
            "body-md": ["JetBrains Mono"],
            "label-caps": ["JetBrains Mono"]
        },
        "fontSize": {
            "display-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
            "headline-md": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
            "body-sm": ["12px", { "lineHeight": "1.5", "fontWeight": "400" }],
            "title-sm": ["18px", { "lineHeight": "1.4", "fontWeight": "600" }],
            "code-lg": ["14px", { "lineHeight": "1.4", "fontWeight": "500" }],
            "body-md": ["14px", { "lineHeight": "1.6", "fontWeight": "400" }],
            "label-caps": ["11px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700" }]
        }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
