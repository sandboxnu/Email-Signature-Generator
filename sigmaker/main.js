$(document).ready(function () {
    // On each click
    $("input[type='submit']").click(function (e) {
        e.preventDefault();
        // Get values in input fields
        var name = $("input[name='name']").val();
        var title = $("input[name='title']").val();
        var phone = $("input[name='phone']").val();
        var email = $("input[name='email']").val();
        // Create signature HTML using ES6 template literal.
        // To update signature, replace this code and template the appropriate variables.
        var sig = `
            <br>
            <br>
            <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
            <tr>
            <td valign="top" style="padding-top: 0; padding-bottom: 0; padding-left: 0; padding-right: 24px; border-top: 0; border-bottom: 0: border-left: 0; border-right: 0">
                <img style="height: 132px;" id="preview-image-url" src="https://tools.hackbeanpot.com/assets/logos/2018_logo_400px.png">
            </td>
            <td style="padding-top: 0; padding-bottom: 0; padding-left: 12px; padding-right: 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
                <tr>
                    <td colspan="2" style="padding-bottom: 5px; color: #1B365D; font-weight: bold; font-size: 18px; font-family: 'Nunito', Helvetica, sans-serif;">${name}</td></tr>
                    <tr>
                    <td colspan="2" style="color: #1B365D; font-size: 14px; font-family: 'Nunito', Helvetica, sans-serif;">${title}</td>
                    </tr>
                    <tr>
                    <td colspan="2" style="color: #1B365D; font-size: 14px; font-family: 'Nunito', Helvetica, sans-serif;">
<strong>HackBeanpot, Inc.</strong></td>
                    </tr>
                    <tr>
                    <td style="color: #1B365D; text-decoration: none; font-size: 14px; font-family: 'Nunito', Helvetica, sans-serif;">${phone}</td>
                    </tr>
                    <tr>
                    <td valign="top" style="vertical-align: top; color: #1B365D; font-size: 14px; font-family: 'Nunito', Helvetica, sans-serif;"><a href="http://hackbeanpot.com" style=" color: #52A1B4; text-decoration: none; font-weight: normal; font-size: 14px;">www.hackbeanpot.com</td>
                    </tr>
                    <tr>
                    <td style="color: #1B365D; font-size: 14px; font-family: 'Nunito', Helvetica, sans-serif;"><a href="mailto:${email}@hackbeanpot.com" style="color: #52A1B4; text-decoration: none; font-weight: normal; font-size: 14px;">${email}@hackbeanpot.com</a></td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>        
        `;
        // Insert as HTML into page
        $("#output").html(sig);
        // Clear all input fields
        var name = $("input[name='name']").val("");
        var title = $("input[name='title']").val("");
        var phone = $("input[name='phone']").val("");
        var email = $("input[name='email']").val("");
    })
});
