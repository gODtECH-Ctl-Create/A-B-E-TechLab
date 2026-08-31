# Website assistant channels

The public website collects the visitor's preferred continuation channel and sends the lead to ABE TechLab Operations. Operations owns the Assistant conversation and provider integrations.

## Required website environment variables

`OPERATIONS_INTAKE_URL` and `OPERATIONS_INTAKE_SECRET` continue to power the website lead intake.

`OPERATIONS_ASSISTANT_CHAT_URL` should point to the Operations `/api/assistant/chat` endpoint. `OPERATIONS_ASSISTANT_SECRET` must match the Operations `ASSISTANT_WEBSITE_SECRET` value.

Set `NEXT_PUBLIC_WHATSAPP_ASSISTANT_NUMBER` to the WhatsApp Business/assistant number in international format. The website uses it to build a click-through `wa.me` link after a lead selects WhatsApp.

## Behaviour

Website Chat opens the persistent Assistant widget and continues with the lead context already collected by the form.

WhatsApp shows a Continue on WhatsApp action. The assistant continues the conversation after the visitor messages the configured WhatsApp number.

Email causes Operations to send the first assistant email when Resend is configured. Replies are received by the Operations webhook and matched back to the same lead and conversation.

Voice causes Operations to attempt an outbound Vapi call when Vapi credentials and phone configuration are present.
