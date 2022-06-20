var gdt =new GlideDate();
var sysIDs=[];
var gr =new GlideRecord('sys_history_line')
gr.addQuery('update_timeON'+gdt+'@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^oldISNOTEMPTY^newISNOTEMPTY^field=install_status^ORfield=operational_status');

gr.query();
while(gr.next()){
//gs.print(gr.set)
var ci =new GlideRecord('sys_history_set');
ci.addQuery('sys_id' ,gr.set);
ci.addQuery('^sys_created_onON'+gdt)
ci.query();
if(ci.next()){
//gr.getDisplayValue('id');
//gs.print(ci.getValue('id'))
sysIDs.push(ci.getValue('id'));
}

}

gs.print(sysIDs.toString());

var queryString ='sys_idIN'+sysIDs.toString();

var ci_list = new GlideRecord("cmdb_ci");
ci_list.addQuery(queryString);
ci_list.query();
var count = ci_list.getRowCount();


var URL='https://' + instanceName + '.service-now.com/cmdb_ci_list.do?sysparm_query='+queryString;

gs.print(URL);

gs.print(count);
if (count != 0) {
    var gd = new GlideDate();
    var instanceName = gs.getProperty('instance_name');
    var des = count + ' Assets Updated  from Disposed /Retired to Active. ' + gdt;
    var help = 'please check the below link to see all the  assets marked active ';
    var url = 'https://' + instanceName + '.service-now.com/cmdb_ci_list.do?sysparm_query='+queryString;
    var total_des = des + '\n' + '\n' +  help + '\n' + '\n' +  url;
	gs.print(total_des)
/*
    var assestSRM = new GlideRecord("u_service_request");
    assestSRM.initialize();
    assestSRM.setValue('contact_type', 'SOAP');
    assestSRM.setValue('u_caller_id', 'ea83eea5d0abf4842efc2858abc266a8'); //sys_id  for user
    assestSRM.setValue('u_category', 'RQ Applications');
    assestSRM.setValue('u_subcategory', 'RQ App Configuration Request');
    assestSRM.setValue('short_description', des);
    assestSRM.setValue('assignment_group', '66bde917adc6ec44e8771ab2f3d96b29');
    assestSRM.setValue('description', total_des);
    assestSRM.insert();
	*/
}




