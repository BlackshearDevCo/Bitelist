import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  H1,
  H2,
  H3,
  Paragraph,
  Caption,
  Link,
} from "@/components/ui/Typography";

const meta: Meta = {
  title: "Typography",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Heading1: StoryObj<typeof H1> = {
  render: () => <H1>Heading 1</H1>,
};

export const Heading2: StoryObj<typeof H2> = {
  render: () => <H2>Heading 2</H2>,
};

export const Heading3: StoryObj<typeof H3> = {
  render: () => <H3>Heading 3</H3>,
};

export const ParagraphText: StoryObj<typeof Paragraph> = {
  render: () => (
    <Paragraph>
      This is a paragraph. The quick brown fox jumps over the lazy dog. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit.
    </Paragraph>
  ),
};

export const CaptionText: StoryObj<typeof Caption> = {
  render: () => <Caption>This is a caption or muted description text.</Caption>,
};

export const LinkText: StoryObj<typeof Caption> = {
  render: () => <Link href="#">This is a link</Link>,
};
