/*_________________________________________________________________
   * Description:MVRS Client Scripts
   * Parameters:Type=onLoad;Ui type= All 
   ________________________________________________________________*/
function onLoad() {

    var decision = g_service_catalog.parent.getValue("request_type"); // parent form value
    alert(decision);
    alert('Testing1');
    if (decision == "a") {
        alert('Testing2');

        g_form.setVisible('apple_count', false); // variable set value hide based on parent value condtion
    }
}
