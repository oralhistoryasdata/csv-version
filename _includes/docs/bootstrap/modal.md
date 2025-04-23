<div class="text-center"><!-- Button trigger modal -->
<button type="button" class="btn btn-{{ include.color | default: 'primary' }}" data-bs-toggle="modal" data-bs-target="#{{include.title | slugify}}">{{ include.button }}</button>
<!-- Modal -->
<div class="modal fade" id="{{include.title | slugify}}" tabindex="-1" aria-labelledby="{{include.title | slugify}}Label" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">{{include.title}}
</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body text-start" markdown="1">
{{include.text}}
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
</div>
