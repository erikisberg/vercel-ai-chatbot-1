import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Vad är roten ur 144?',
    message: `Vad är roten ur 144?`
  },
  {
    heading: 'Varför ockuperade Nazi-Tyskland Paris?',
    message: 'Varför ockuperade Nazi-Tyskland Paris?'
  },
  {
    heading: 'Ordet "katt" på franska och hur man böjer det?',
    message: `Ordet "katt" på franska och hur man böjer det?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Välkommen till din persoonliga AI-coach!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Detta är en AI-lärare som hjälper dig att hitta svar på dina frågor.
        </p>
        <p className="leading-normal text-muted-foreground">
          Du kan få hjälp med allt från matte och historia till språk och:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
