$(document).ready(function () {
    // On each click
    $("input[type='submit']").click(function (e) {
        e.preventDefault();
        // Get values in input fields
        var name = $("input[name='name']").val();
        var title = $("input[name='title']").val();
        var email = $("input[name='email']").val();
        // Create signature HTML using ES6 template literal.
        // To update signature, replace this code and template the appropriate variables.
        let sig = `
            <br>
            <br>
            <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
            <tr>
            <td valign="top" style="padding-top: 0; padding-bottom: 0; padding-left: 0; border-top: 0; border-bottom: 0: border-left: 0; border-right: 0">
                <img style="height: 132px;" src="email-logo.svg">
            </td>
            <td style="padding-top: 0; padding-bottom: 0; padding-left: 12px; padding-right: 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
                <tr>
                    <td colspan="2" style="color: #2a426b; font-weight: bold; font-size: 16px;  font-family:'Montserrat';">${name}</td></tr>
                    <tr>
                    <td colspan="2" style="color: #2a426b; font-size: 14px; font-family:'Montserrat';">${title}</td>
                    </tr>
                    <tr><td colspan="2" style="font-size: 10px;" ><br/></td></tr>
                    <tr>
                    <td colspan="2" style="color: #2a426b; font-weight: bold; font-size: 14px; opacity: 75%; font-family:'Montserrat';">Sandbox Northeastern</td>
                    </tr>
                    <tr>
                    <td valign="top" style="vertical-align: top; font-size: 12px; opacity: 75%; font-family:'Montserrat';"><a href="https://www.sandboxnu.com/" style=" color: #2a426b; text-decoration: none; font-weight: normal; font-size: 14px;">sandboxnu.com</td>
                    </tr>
                    <tr>
                    <td style="color: #2a426b; font-size: 12px; opacity: 75%; font-family:'Montserrat';"><a href="mailto:${email}" style="color: #2a426b; text-decoration: none; font-weight: normal; font-size: 14px;">${email}</a></td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>        
        `;
        // Insert as HTML into page
        $("#signature").html(sig);
    })
});