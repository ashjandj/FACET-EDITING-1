{{#if showBackToAccount}}
	<a href="/" class="case-list-button-back">
		<i class="case-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a>
{{/if}}

<div id="case-banner" class="case-banner">
    <div data-cms-area="global_banner_case-top" data-cms-area-filters="global"></div>
</div>

<section class="case-list">
    <div id="case-list-banner" class="content-banner case-list-banner" data-cms-area="banner_caselist" data-cms-area-filters="global"></div>
	<header class="case-list-header">
		<h2 class="case-list-title">
			{{pageHeader}}
		</h2>
		<a class="case-list-header-button-new" href="#" data-touchpoint="customercenter" data-hashtag="#/newcase">{{translate 'Create New Case'}}</a>
        <div data-confirm-message class="case-list-confirm-message"></div>
    </header>

	<div data-view="List.Header" class="case-list-list-header-container"></div>

	<div class="case-list-results-container">
		{{#if hasCases}}
			<table class="case-list-recordviews-table">
				<thead class="case-list-content-table">
					<tr class="case-list-content-table-header-row">
						<th class="case-list-content-table-header-row-title">
							<span>{{translate 'Case No.'}}</span>
						</th>
						<th class="case-list-content-table-header-row-subject">
							<span>{{translate 'Subject'}}</span>
						</th>
						<th class="case-list-content-table-header-row-creation-date">
							<span>{{translate 'Creation date'}}</span>
						</th>
						<th class="case-list-content-table-header-row-date">
							<span>{{translate 'Last Message'}}</span>
						</th>
						<th class="case-list-content-table-header-row-status">
							<span>{{translate 'Status'}}</span>
						</th>
					</tr>
				</thead>
				<tbody data-view="Case.List.Items"></tbody>
			</table>
		{{else}}
			{{#if isLoading}}
				<p class="case-list-empty">{{translate 'Loading...'}}</p>
			{{else}}
			    <div class="case-list-empty-section">
				    <h5 class="case-list-empty">{{translate 'No cases were found'}}</h5>
                </div>
			{{/if}}
		{{/if}}
	</div>

	{{#if showPagination}}
		<div class="case-list-paginator">
			<div data-view="GlobalViews.Pagination" class="case-list-global-views-pagination"></div>
			{{#if showCurrentPage}}
				<div data-view="GlobalViews.ShowCurrentPage" class="case-list-global-views-current-page"></div>
			{{/if}}
		</div>
	{{/if}}
</section>




{{!----
Use the following context variables when customizing this template:

	pageHeader (String)
	hasCases (Number)
	isLoading (Boolean)
	showPagination (Boolean)
	showCurrentPage (Boolean)
	showBackToAccount (Boolean)

----}}

