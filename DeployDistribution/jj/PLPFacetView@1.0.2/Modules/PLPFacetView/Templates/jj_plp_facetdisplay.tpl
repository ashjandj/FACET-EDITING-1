{{#if showFacet}}
	<div class="facets-faceted-navigation-item-facet-group" id="{{htmlId}}" data-type="rendered-facet" data-facet-id="{{facetId}}">
		{{#if showHeading}}
			{{#if isUncollapsible}}
				<div class="facets-faceted-navigation-item-facet-group-expander">
					<h4 class="facets-faceted-navigation-item-facet-group-title">
						{{facetDisplayName}}
						{{#if showRemoveLink}}
						<a class="facets-faceted-navigation-item-filter-delete" href="{{removeLink}}">
							<i class="facets-faceted-navigation-item-filter-delete-icon"></i>
						</a>
						{{/if}}
					</h4>
				</div>
			{{else}}
				<a href="#" class="facets-faceted-navigation-item-facet-group-expander" data-toggle="collapse" data-target="#{{htmlId}}-wrapper" data-type="collapse" title="{{facetDisplayName}}">
					
					<h4 class="facets-faceted-navigation-item-facet-group-title">{{facetDisplayName}}</h4>
					{{#if showRemoveLink}}
						<a class="facets-faceted-navigation-item-filter-delete" href="{{removeLink}}">
							
						</a>
					{{/if}}
				</a>
			{{/if}}
		{{/if}}

		<div class="{{#if isCollapsed}} collapse in {{else}} collapse {{/if}} facets-faceted-navigation-item-facet-group-wrapper" id="{{htmlId}}-wrapper">
			<div class="facets-faceted-navigation-item-facet-group-content">
				<div class="facets-faceted-navigation-item-facet-optionlist">
					{{#each displayValues}}
						<div class="facet-option">
							<a class="facets-faceted-navigation-item-facet-option {{#if isActive}}option-active{{/if}}" href="{{link}}" title="{{label}}">
								{{#if ../isMultiSelect}}
									<input aria-hidden="true" tabindex="-1" type="checkbox" class="facets-faceted-navigation-item-facet-multi" {{#if isActive}}checked {{/if}} />
								{{/if}}

								<span>{{displayName}}</span>

								{{#unless ../isMultiSelect}}
									{{#if isActive}}
										<i class="facets-faceted-navigation-item-facet-option-circle"></i>
									{{/if}}
								{{/unless}}
							</a>
						</div>
					{{/each}}
				</div>

				{{#if showExtraValues}}
					<div class="facets-faceted-navigation-item-facet-optionlist-extra-wrapper">
						<ul class="facets-faceted-navigation-item-facet-optionlist-extra collapse">
							{{#each extraValues}}
								<li class="facet-option">
									<a class="facets-faceted-navigation-item-facet-option {{#if isActive}}option-active{{/if}}" href="{{link}}" title="{{label}}">
										{{#if ../isMultiSelect}}
											<input type="checkbox" class="facets-faceted-navigation-item-facet-multi" {{#if isActive}}checked {{/if}} />
										{{/if}}

										{{displayName}}

										{{#unless ../isMultiSelect}}
											{{#if isActive}}
												<i class="facets-faceted-navigation-item-facet-option-circle"></i>
											{{/if}}
										{{/unless}}
									</a>
								</li>
							{{/each}}
						</ul>
						<!--<a class="facets-faceted-navigation-item-category-optionlist-extra-button" data-toggle="collapse" data-target="#{{htmlId}} .facets-faceted-navigation-item-facet-optionlist-extra" data-action="see-more">
							<span data-type="see-more">{{translate 'See More'}}</span>
							<span data-type="see-less" class="facets-faceted-navigation-item-alt-caption">{{translate 'See Less'}}</span>
						</a>-->
					</div>
				{{/if}}
			</div>
		</div>
	</div>
{{/if}}
