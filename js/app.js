
$(document).ready(function(){

  var tableTemplate = _.template($("#tableTemplate").html());

 var burialCosts = [{"subjects":"Embalming", "conventional":"$695", "natural":"Not Applicable"},
{"subjects":"Use of Facilities and Staff", "conventional":"$495", "natural":"$400"},
{"subjects":"Casket or Shroud", "conventional":"$2,395", "natural":"$700"},
{"subjects":"Vault", "conventional":"$1,327", "natural":"Not Applicable"},
{"subjects":"Median Cost of Funeral", "conventional":"$7,181", "natural":"$3,000"}];


  // make a selection option for each row data set on dropdown menu
  _.each(burialCosts, function(value, index){
    $('#select').append('<option value="'+ value.subjects+'">'+value.subjects+'</option>')
  })

  // eventhandler on change

  $('#select').on("change", function(){
    var dropdownValue = $('#select').val(),
      data = _.findWhere(burialCosts, {subjects: dropdownValue});

      $("#results-table").html(tableTemplate({obj: data}));
      console.log(data);

  });

});

$(document).foundation()
