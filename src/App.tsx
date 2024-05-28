import React from "react";
import { Page, Section, Cell, ImageAvatar } from '@twa-dev/mark42';


export const App = () => (
<Page mode="secondary">
  <Section
    description="Share your contacts with the community. It will help other members to reach you faster."
    header="Public contacts">
    <Cell
    before={<ImageAvatar size={48} src="https://primeupyour.life/index_files/65071567acf34e9a15edafa9_cashapp.webp"/>}
    description="$PrimeUpYourLife">
      Cash App
    </Cell>
    <Cell
    before={<ImageAvatar size={48} src="https://primeupyour.life/index_files/stripe_color.png"/>}
    description="Minimum $20">
      Apple/Google Pay
    </Cell>
    <Cell
    before={<ImageAvatar size={48} src="https://primeupyour.life/index_files/6507155387c260077719f930_revolut.png"/>}
    description="Any currency accepted">
      Revolut
    </Cell>
  </Section>
</Page>
);