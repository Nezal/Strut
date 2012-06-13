define(["vendor/backbone"],
(Backbone) ->
	toDeg = Math.PI / 180
	silent = {silent: true}
	Backbone.Model.extend(
		initialize: () ->
			deck = @get("deck")
			deck.on("change:activeSlide", @_activeSlideChanged, @)
			@_lastActive = null
			@_activeSlideChanged(deck, deck.get("activeSlide"))

		_activeSlideChanged: (deck, slide) ->
			if @_lastActive?
				@_lastActive.off(null, null, @)

			@_lastActive = slide
			if slide?
				slide.on("change:x", @_slidePositionChanged, @)
				slide.on("change:y", @_slidePositionChanged, @)
				slide.on("change:z", @_slidePositionChanged, @)
				slide.on("change:rotateX", @_slideRotationChanged, @)
				slide.on("change:rotateY", @_slideRotationChanged, @)
				slide.on("change:rotateZ", @_slideRotationChanged, @)
				@_slidePositionChanged(slide)
				@_slideRotationChanged(slide)
				
		_slidePositionChanged: (slide, value) ->
			@trigger("change:slidePosition", @,
				@slidePosition())

		_slideRotationChanged: (slide, value) ->
			@trigger("change:slideRotations", @,
				@slideRotations())

		slidePosition: () ->
			slide = @_lastActive
			if slide?
				[slide.get("x"), slide.get("y"), slide.get("z")]
			else
				[0,0,0]
				
		slideRotations: () ->
			slide = @_lastActive
			if slide?
				[slide.get("rotateX") * toDeg
				slide.get("rotateY") * toDeg
				slide.get("rotateZ") * toDeg]
			else
				[0,0,0]

				
		changeSlidePosition: (x,y,z) ->
			# Silently set the position of the active slide
			slide = @_lastActive
			if slide?
				toSet = {}
				if x?
					toSet.x = x
				if y?
					toSet.y = y
				if z?
					toSet.z = z
				slide.set(toSet, silent)
				slide.trigger("render")
				
		changeSlideRotations: (x,y,z) ->
			# Silently set the rotations on the active slide
			slide = @_lastActive
			if slide?
				toSet = {}
				if x?
					toSet.rotateX = x * toDeg
				if y?
					toSet.rotateY = y * toDeg
				if z?
					toSet.rotateZ = z * toDeg
				slide.set(toSet, silent)
				slide.trigger("rerender")


		constructor: `function TransitionEditorButtonBarModel() {
			Backbone.Model.prototype.constructor.apply(this, arguments);
		}`
	)
)