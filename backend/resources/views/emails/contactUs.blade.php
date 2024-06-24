<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <table id="main" align="center" border="0" cellpadding="0" cellspacing="0"
        style="width: 100%; background-color: #edf2f7;">
        <tbody>
            <tr>
                <td>
                    <table id="content" align="center" border="0" cellpadding="0" cellspacing="0"
                        style="border-radius: 12px; border: 1px solid #e4e4e7; color: #000; background-color: #fff; width: 600px; margin: 5rem auto">
                        <tbody>
                            <tr>
                                <td
                                    style="font-weight: 400; text-align: left; padding-bottom: 16px; padding-top: 16px; vertical-align: top; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                        style="word-break: break-word" width="100%">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="padding-bottom: 4px; padding-left: 16px; padding-right: 16px">
                                                    <div
                                                        style="color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; font-weight: 400; letter-spacing: 0; line-height: 150%; text-align: left">
                                                        <p style="margin: 0; margin-bottom: 16px">Dear Team,&nbsp;</p>
                                                        <p style="margin: 0;margin-bottom: 16px">A new inquiry has been
                                                            submitted through the contact form on our landing page.</p>
                                                        <hr style="border-color:#e4e4e7; border-style:solid;" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                        style="word-break: break-word; padding-left: 16px; padding-right: 16px"
                                        width="100%">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="padding-bottom: 12px; padding-right: 24px; white-space: nowrap; vertical-align: top">
                                                    <b
                                                        style="color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">Name:</b>
                                                </td>
                                                <td style="width: 100%; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;"
                                                    width="100%" overflow="hidden">
                                                    <p
                                                        style="margin: 0; color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">
                                                        {{ $contactMessage->name }}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="padding-bottom: 12px; padding-right: 24px; white-space: nowrap; vertical-align: top">
                                                    <b
                                                        style="color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">Contact
                                                        number:</b>
                                                </td>
                                                <td style="width: 100%; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;"
                                                    width="100%" overflow="hidden">
                                                    <p
                                                        style="margin: 0; color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">
                                                        {{ $contactMessage->phone_number }}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="padding-bottom: 12px; padding-right: 24px; white-space: nowrap; vertical-align: top">
                                                    <b
                                                        style="color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">Email:</b>
                                                </td>
                                                <td style="width: 100%; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;"
                                                    width="100%" overflow="hidden">
                                                    <p
                                                        style="margin: 0; color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">
                                                        {{ $contactMessage->email }}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="padding-bottom: 12px; padding-right: 16px; white-space: nowrap; vertical-align: top">
                                                    <b
                                                        style="color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">Message:</b>
                                                </td>
                                                <td style="padding-bottom: 12px; width: 100%;" width="100%">
                                                    <p
                                                        style="margin: 0; color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 1.4; text-align: left">
                                                        {{ $contactMessage->message }}
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="font-weight: 400; text-align: left; padding-bottom: 4px; padding-top: 4px; vertical-align: top; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                        style="word-break: break-word" width="100%">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="padding-bottom: 4px; padding-left: 16px; padding-right: 16px">
                                                    <div
                                                        style="color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; font-weight: 400; letter-spacing: 0; line-height: 150%; text-align: left">
                                                        <hr style="border-color:#e4e4e7; border-style:solid;" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                        style="word-break: break-word" width="100%">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="padding-bottom: 4px; padding-left: 16px; padding-right: 16px">
                                                    <div
                                                        style="color: #263159; direction: ltr; font-family: Proxima-Nova,sans-serif; font-size: 16px; font-weight: 400; letter-spacing: 0; line-height: 150%; text-align: left">
                                                        <p style="margin: 0; margin-bottom: 16px">Regards,&nbsp;</p>
                                                        <p style="margin: 0;margin-bottom: 16px">Klenze support team
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>