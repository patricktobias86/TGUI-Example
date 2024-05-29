import React from "react";
import { Page, Section, Cell, ImageAvatar } from '@twa-dev/mark42';


export const App = () => (
<Page mode="secondary">
  <Section
    description="All donations will be used to keep the room running, every room cost $65 dollar."
    header="How to donate">
    <a href="javascript:Telegram.WebApp.openLink('https://primeupyour.life/CASHAPP/');"><Cell
    before={<ImageAvatar size={48} src="https://primeupyour.life/index_files/65071567acf34e9a15edafa9_cashapp.webp"/>}>
      Cash App
    </Cell></a>
    <a href="javascript:Telegram.WebApp.openLink('https://primeupyour.life/STRIPE/');"><Cell
    before={<ImageAvatar size={48} src="https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889684-paypal_82515.png"/>}>
      PayPal
    </Cell></a>
    <a href="javascript:Telegram.WebApp.openLink('https://primeupyour.life/STRIPE/');"><Cell
    before={<ImageAvatar size={48} src="https://primeupyour.life/index_files/stripe_color.png"/>}
    description="Apple Pay/Google Pay">
      Stripe
    </Cell></a>
    <a href="javascript:Telegram.WebApp.openLink('https://primeupyour.life/REVOLUT/');"><Cell
    before={<ImageAvatar size={48} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAAD09PSHh4fQ0NAeHh78/Pw/Pz+lpaVeXl4ICAiPj49ZWVni4uLv7+/BwcE1NTW3t7dMTEyXl5dFRUUkJCQQEBB+fn7Z2dk6OjpTU1MrKytoaGirq6t2dnZvb28XFxfsXI9fAAAFG0lEQVR4nO2di5KiMBBFJ4iog4IIAr5m/P+vXHVra2t27YY8+kasPh/AcMokJP3IfHwoiqIoiqIoiqIoiqIoiqK8N1kAYjv8Iam3C3+a5thVaWyXj2RmQvHZLvL+XWQezGd9vFEXWubGIi0i+QjIGHOoNu8jY8yqSt5Hxsy7CGuBlIwxu8sbydx+HPQ6IChjzLF4IxmzwK5qsjJmC93jCMuYA9JGWsYcgUu0uIxZ4eaNvIzpYJsBgIxZor43CJkTahFAyJgd6KeByBjQNg0jYzBrwE3m05MxMt8QmaxcelJ3x8V+0Aa85fSgqLrdgEwX+x1t6HNeZx8nKuBK2nEyn3ns97MjWZ4Ym2OMCIcHWbWlZbZl7NezhbOZxX45a5a0zHli4+zGFynTxM8S2LIhV+g5Po7mTd5SNrX8H88SCrd9+2ZBycifOLNylhM4frPJWXMW3wQk5Hf703HCltQ4k4/T0OeZuaNMNiceKL+chZf5oGTk9wACMtTivJ+iDLUCzKugb/4EARnqie0UZb6JB05ymFFz5jRFmSvxwMUEl+aCkpnid+ZCBdLWE9wBnKkHfonHzoLLbMiT80w8fB5cJifDtcvAr/4/oWX6hnreSfybGVomob6Yt/kvH9MMLFOTLuZLPuMUVCa70OmAq/yUCSqTXZgYYAOInAeUKWrqWHYHkW4KJ1PSc//+NESoOZRM2jFDzIASzgFksiStVwdWBZRvHimTntcki9OejGL+YY9wGSmzIXePI8EkZ0bKrP1cGojLWJmVnwyo5gwiU0evnQknA8uZAWQaWGGjvMypgtVqi8u0sDpAgEwOrKGXloEWAAnLYIuZRGWu4OofSZkDOvMvKLOCl2SIyWxdU+8vKHMuI7Q3yshs4/Q2Ssjsl5s4XafhZZrKserm5WROdcwq2TAy7XW+P23PVeRS7HEySc7LfC3L/gVqykeGmno+ooFrXmIZGwQsuZplYPMSy1iZrKYy4g+uL1G1PDo8W/BxwOYVBtr4WHPPDzRMhwyPReC8YmVQrVgcNlkAugD7zjV+U4lVSoP/aQ4RXv8nVjIb3iZ695JdsonpWzCQsgUeO5mMX593cS8Esk0Dbshqkgdd3A2apUxWsV2M17jbGtsEbcYUlBj0NRP/Yp1tHtjWrGIONPvUeUn2lDxABsr/xaEOoOYT5REHmktRA1tXguowf4aLTMF3/u6Q7/8Dp3ITst/nN4Dmsue41c4MxDdiTRs3mYwPPe0inQYcq5p6/jqDSNEa1xKtkpWJ1GDqKjNwkUic3l/n4rmBQif5wv8nuFcCpvy0ibF/9ihrvLAyoHq5H3jIFOylGTHWZ5+C05Tf1uDXZ6/qWf7YiQ8LeslkM/Zuoxa9PvvVNRd8fAMdTfcs0u5ZGXRY0LfinA8LXrFhQe/yeX4jgGg0+Yu3DHmXwW9WyI2Af2NDysq0yGOnv0zGT5sDcFsToOWk4KM1L3HD6fhmoJT/2uQvcMPpeBmuCdDc1+f4N5xatGnRl9c82KIGWpieM/q6qQfrl+rSGGSgGgVUEhyqG3DgolRMfjBYn+bARZqQFS2YTMEf1M5C7/+DgB20rEyLOHYG7G3mpw0i2xmyUZs/DQC2NSFb6FN2fW5r8UUg7H0A7E8j33ge9KaGgbCgeFtg2Ds0+iNrI12NEvhCkIo/RF9kN2m0jFsIj69GEc52Jsv16jlnpxFezKjn3VlL39cS+j/+TePfCCqKoiiKoiiKoiiKoiiKEplf4HVSeFAxZUgAAAAASUVORK5CYII="/>}>
      Revolut
    </Cell></a>
  </Section>
</Page>
);