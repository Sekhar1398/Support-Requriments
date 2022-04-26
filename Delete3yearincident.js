var gdt = new GlideDateTime();
gdt.addYearsLocalTime(-3);
gs.info(gdt.getDate());

var date=gdt.getDate();
var time='00:00:00';
var queryList='sys_created_on<'+gs.dateGenerate(date,time);
var grIncident = new GlideRecord('incident');

grIncident.addQuery(queryList);

grIncident.query();
grIncident.setLimit(100)
gs.info(grIncident.getRowCount())

while (grIncident.next()) {
gs.log('Incident Found: '+grIncident.number +' Incident created: '+grIncident.sys_created_on);
grIncident.deleteRecord();
}
