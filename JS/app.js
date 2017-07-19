<script type="text/javascript">
function submitform()
{
    document.forms["myform"].submit();
}
</script>
<form id="myform" action="submit-form.php">
Email: <input type='text' name='query'>
<a href="javascript: submitform()">Submit</a>
</form>
