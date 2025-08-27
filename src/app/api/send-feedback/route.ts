import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY!);
const FROM = process.env.MAIL_FROM || 'Velvera <onboarding@resend.dev>';
const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    if (!name || !email) return Response.json({ ok:false, error:'Missing fields' }, { status:400 });

    const url = `${SITE_URL}/feedback.html`;

    const html = `
<!doctype html>
<html lang="de"><head>
<meta charset="utf-8"><meta name="x-apple-disable-message-reformatting">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>Wie war Ihr Besuch?</title>
</head>
<body style="margin:0;background:#f6f7fb">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
<tr><td align="center" style="padding:24px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:16px;box-shadow:0 6px 24px rgba(18,18,23,.06);overflow:hidden;font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;color:#111827">
    <tr><td style="padding:24px">
      <h2 style="margin:0 0 12px">Wie war Ihr Besuch?</h2>
      <p style="margin:0 0 16px">Hallo, <b>${escapeHtml(name)}</b>! Wir freuen uns über Ihr kurzes Feedback.</p>

      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 20px"><tr>
        <td bgcolor="#FF6A00" align="center" style="border-radius:12px;text-align:center;">
          <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${url}" style="height:40px;v-text-anchor:middle;width:220px;" arcsize="24%" stroke="f" fillcolor="#FF6A00"><w:anchorlock/><center style="color:#FFFFFF;font-family:Arial,sans-serif;font-size:16px;font-weight:700;">Feedback geben</center></v:roundrect><![endif]-->
          <!--[if !mso]><!-- --><a href="${url}" target="_blank" style="background-color:#FF6A00;color:#FFFFFF !important;-webkit-text-fill-color:#FFFFFF;display:inline-block;padding:12px 18px;text-decoration:none;border-radius:12px;font-weight:700;font-size:16px;line-height:16px;mso-padding-alt:0;"><span style="color:#FFFFFF !important;-webkit-text-fill-color:#FFFFFF;"><font color="#FFFFFF">Feedback geben</font></span></a><!--<![endif]-->
        </td>
      </tr></table>

      <p style="margin:0;color:#6b7280;font-size:12px">Vielen Dank 💛</p>
    </td></tr>
  </table>
</td></tr>
</table>
</body></html>`.trim();

    const { error } = await resend.emails.send({ from: FROM, to: email, subject: 'Wie war Ihr Besuch?', html });
    if (error) return Response.json({ ok:false, error:String(error) }, { status:500 });
    return Response.json({ ok:true });
  } catch (e:any) {
    return Response.json({ ok:false, error:e?.message || 'Server error' }, { status:500 });
  }
}

function escapeHtml(s:string){return s.replace(/[&<>"']/g,(c)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' } as any)[c]);}
